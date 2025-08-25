-- CreateTable
CREATE TABLE "public"."devocionarios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "devocionarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."oracion" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "oracion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_DevocionarioOraciones" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_DevocionarioOraciones_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "devocionarios_nombre_key" ON "public"."devocionarios"("nombre");

-- CreateIndex
CREATE INDEX "_DevocionarioOraciones_B_index" ON "public"."_DevocionarioOraciones"("B");

-- AddForeignKey
ALTER TABLE "public"."_DevocionarioOraciones" ADD CONSTRAINT "_DevocionarioOraciones_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."devocionarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_DevocionarioOraciones" ADD CONSTRAINT "_DevocionarioOraciones_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."oracion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
