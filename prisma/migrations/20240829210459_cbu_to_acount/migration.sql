/*
  Warnings:

  - You are about to drop the column `cbu` on the `transactions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cbu]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cbu` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "transactions_cbu_key";

-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "cbu" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "cbu";

-- CreateIndex
CREATE UNIQUE INDEX "accounts_cbu_key" ON "accounts"("cbu");
