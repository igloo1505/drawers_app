/*
  Warnings:

  - You are about to drop the column `assignedBy` on the `TagsOnItem` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `TagsOnPost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TagsOnItem" DROP COLUMN "assignedBy";

-- AlterTable
ALTER TABLE "TagsOnPost" DROP COLUMN "assignedBy";
