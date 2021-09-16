-- DropForeignKey
ALTER TABLE `Work` DROP FOREIGN KEY `Work_userId_fkey`;

-- AlterTable
ALTER TABLE `User` MODIFY `name` VARCHAR(191),
    MODIFY `isleft` BOOLEAN;

-- AlterTable
ALTER TABLE `Work` MODIFY `userId` INTEGER,
    MODIFY `onwork` INTEGER,
    MODIFY `offwork` INTEGER,
    MODIFY `worktime` INTEGER,
    MODIFY `date` INTEGER;

-- AddForeignKey
ALTER TABLE `Work` ADD CONSTRAINT `Work_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
