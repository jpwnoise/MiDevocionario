/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `usuarios_web` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."usuarios_web" ADD COLUMN     "email" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_web_email_key" ON "public"."usuarios_web"("email");
