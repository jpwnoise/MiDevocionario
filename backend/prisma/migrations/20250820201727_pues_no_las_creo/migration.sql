-- CreateTable
CREATE TABLE "public"."usuarios_web" (
    "id" SERIAL NOT NULL,
    "rol" TEXT,
    "nombre" TEXT,
    "password" TEXT NOT NULL,
    "fecha_registro" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "ultima_conexion" TIMESTAMP(3),

    CONSTRAINT "usuarios_web_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Rol" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rol_nombre_key" ON "public"."Rol"("nombre");
