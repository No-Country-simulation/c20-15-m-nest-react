/*
  Warnings:

  - A unique constraint covering the columns `[alias]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `alias` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "alias" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "accounts_alias_key" ON "accounts"("alias");
