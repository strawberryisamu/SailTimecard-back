/*
  Warnings:

  - You are about to drop the column `isleft` on the `Work` table. All the data in the column will be lost.
  - Added the required column `isleft` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `isleft` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Work` DROP COLUMN `isleft`;
