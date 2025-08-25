-- AlterTable
ALTER TABLE "public"."devocionarios" ADD COLUMN     "usuarioId" INTEGER;

-- AddForeignKey
ALTER TABLE "public"."devocionarios" ADD CONSTRAINT "devocionarios_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."usuarios_web"("id") ON DELETE SET NULL ON UPDATE CASCADE;
