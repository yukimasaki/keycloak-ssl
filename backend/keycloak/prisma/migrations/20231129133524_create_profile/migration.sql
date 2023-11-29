-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_uuid_key" ON "Profile"("uuid");
