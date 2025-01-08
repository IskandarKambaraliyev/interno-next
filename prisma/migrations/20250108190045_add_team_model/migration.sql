/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Testimonials` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Testimonials" DROP COLUMN "createdAt";

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "functionality" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "website" TEXT,
    "facebook" TEXT,
    "twitter" TEXT,
    "linkedin" TEXT,
    "instagram" TEXT,
    "qa" JSONB NOT NULL,
    "design" INTEGER NOT NULL,
    "management" INTEGER NOT NULL,
    "client" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);
