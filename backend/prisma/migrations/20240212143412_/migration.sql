-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'customer');

-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(100) NOT NULL,
    "full_name" VARCHAR(250) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(250) NOT NULL,
    "address" TEXT,
    "phone_number" VARCHAR(15),
    "profile_pic" TEXT,
    "about_me" TEXT,
    "role" "Role" NOT NULL DEFAULT 'customer',
    "token" VARCHAR(250),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
