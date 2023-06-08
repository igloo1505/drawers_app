/*
  Warnings:

  - You are about to drop the `TagsOnItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagsOnPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagsOnProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TagsOnItem" DROP CONSTRAINT "TagsOnItem_itemId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnItem" DROP CONSTRAINT "TagsOnItem_tagId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnPost" DROP CONSTRAINT "TagsOnPost_postId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnPost" DROP CONSTRAINT "TagsOnPost_tagId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnProfile" DROP CONSTRAINT "TagsOnProfile_profileId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnProfile" DROP CONSTRAINT "TagsOnProfile_tagId_fkey";

-- DropTable
DROP TABLE "TagsOnItem";

-- DropTable
DROP TABLE "TagsOnPost";

-- DropTable
DROP TABLE "TagsOnProfile";

-- CreateTable
CREATE TABLE "_PostToTag" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProfileToTag" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ItemToTag" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostToTag_AB_unique" ON "_PostToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_PostToTag_B_index" ON "_PostToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProfileToTag_AB_unique" ON "_ProfileToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ProfileToTag_B_index" ON "_ProfileToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToTag_AB_unique" ON "_ItemToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToTag_B_index" ON "_ItemToTag"("B");

-- AddForeignKey
ALTER TABLE "_PostToTag" ADD CONSTRAINT "_PostToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToTag" ADD CONSTRAINT "_PostToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfileToTag" ADD CONSTRAINT "_ProfileToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfileToTag" ADD CONSTRAINT "_ProfileToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToTag" ADD CONSTRAINT "_ItemToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToTag" ADD CONSTRAINT "_ItemToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("value") ON DELETE CASCADE ON UPDATE CASCADE;
