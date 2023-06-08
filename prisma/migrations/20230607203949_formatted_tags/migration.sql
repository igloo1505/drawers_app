/*
  Warnings:

  - Added the required column `formattedValue` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tag" ADD COLUMN     "formattedValue" TEXT NOT NULL;
