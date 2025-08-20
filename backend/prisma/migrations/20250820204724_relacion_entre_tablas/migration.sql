/*
  Warnings:

  - You are about to drop the column `rol` on the `usuarios_web` table. All the data in the column will be lost.
  - Added the required column `rolId` to the `usuarios_web` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."usuarios_web" DROP COLUMN "rol",
ADD COLUMN     "rolId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."usuarios_web" ADD CONSTRAINT "usuarios_web_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "public"."Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
