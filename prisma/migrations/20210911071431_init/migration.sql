/*
  Warnings:

  - Added the required column `isleft` to the `Work` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Work` ADD COLUMN `isleft` BOOLEAN NOT NULL;
