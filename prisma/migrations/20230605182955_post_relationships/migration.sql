/*
  Warnings:

  - You are about to drop the column `firstName` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `itemId` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_itemId_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_profileId_fkey";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "firstName",
DROP COLUMN "userId",
ALTER COLUMN "interests" SET NOT NULL,
ALTER COLUMN "interests" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "itemId",
DROP COLUMN "profileId";

-- CreateTable
CREATE TABLE "SellerDetails" (
    "id" SERIAL NOT NULL,
    "drawers" BOOLEAN NOT NULL DEFAULT false,
    "videos" BOOLEAN NOT NULL DEFAULT false,
    "webcamChats" BOOLEAN NOT NULL DEFAULT false,
    "photos" BOOLEAN NOT NULL DEFAULT false,
    "sexting" BOOLEAN NOT NULL DEFAULT false,
    "userName" TEXT NOT NULL,

    CONSTRAINT "SellerDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModelStatus" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "posted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userName" TEXT NOT NULL,

    CONSTRAINT "ModelStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagsOnPost" (
    "postId" INTEGER NOT NULL,
    "tagId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "TagsOnPost_pkey" PRIMARY KEY ("tagId","postId")
);

-- CreateTable
CREATE TABLE "TagsOnProfile" (
    "profileId" INTEGER NOT NULL,
    "tagId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "TagsOnProfile_pkey" PRIMARY KEY ("tagId","profileId")
);

-- CreateTable
CREATE TABLE "TagsOnItem" (
    "itemId" INTEGER NOT NULL,
    "tagId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "TagsOnItem_pkey" PRIMARY KEY ("tagId","itemId")
);

-- CreateIndex
CREATE UNIQUE INDEX "SellerDetails_userName_key" ON "SellerDetails"("userName");

-- AddForeignKey
ALTER TABLE "SellerDetails" ADD CONSTRAINT "SellerDetails_userName_fkey" FOREIGN KEY ("userName") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModelStatus" ADD CONSTRAINT "ModelStatus_userName_fkey" FOREIGN KEY ("userName") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnPost" ADD CONSTRAINT "TagsOnPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnPost" ADD CONSTRAINT "TagsOnPost_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("content") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnProfile" ADD CONSTRAINT "TagsOnProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnProfile" ADD CONSTRAINT "TagsOnProfile_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("content") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnItem" ADD CONSTRAINT "TagsOnItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnItem" ADD CONSTRAINT "TagsOnItem_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("content") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userName_fkey" FOREIGN KEY ("userName") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
