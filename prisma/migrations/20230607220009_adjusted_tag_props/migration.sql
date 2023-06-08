/*
  Warnings:

  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `content` on the `Tag` table. All the data in the column will be lost.
  - Added the required column `value` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TagsOnItem" DROP CONSTRAINT "TagsOnItem_tagId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnPost" DROP CONSTRAINT "TagsOnPost_tagId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnProfile" DROP CONSTRAINT "TagsOnProfile_tagId_fkey";

-- AlterTable
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_pkey",
DROP COLUMN "content",
ADD COLUMN     "value" TEXT NOT NULL,
ADD CONSTRAINT "Tag_pkey" PRIMARY KEY ("value");

-- AddForeignKey
ALTER TABLE "TagsOnPost" ADD CONSTRAINT "TagsOnPost_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("value") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnProfile" ADD CONSTRAINT "TagsOnProfile_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("value") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnItem" ADD CONSTRAINT "TagsOnItem_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("value") ON DELETE RESTRICT ON UPDATE CASCADE;
