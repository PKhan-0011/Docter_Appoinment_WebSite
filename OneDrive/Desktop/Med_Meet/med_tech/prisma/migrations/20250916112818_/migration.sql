-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('UNASSIGNED', 'PATIENT', 'DOCTOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "public"."verificationStatus" AS ENUM ('UNASSIGNED', 'PENDING', 'VERIFIED', 'REJECTED');

-- CreateEnum
CREATE TYPE "public"."SlotStatus" AS ENUM ('UNASSIGNED', 'AVAILABILE', 'UNAVAILABILE');

-- CreateEnum
CREATE TYPE "public"."AppoinmentStatus" AS ENUM ('UNASSIGNED', 'SCHEDULED', 'COMPLETED', 'CANCELED');

-- CreateEnum
CREATE TYPE "public"."TranasactionType" AS ENUM ('UNASSIGNED', 'UPI', 'CASH', 'CREDIT', 'ADMIN_ADJUSMENT', 'APPOINMENT_DEDUCTION');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userName" TEXT,
    "imageUrl" TEXT,
    "role" "public"."UserRole" NOT NULL DEFAULT 'UNASSIGNED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "credits" INTEGER NOT NULL DEFAULT 2,
    "specialty" TEXT,
    "experience" INTEGER,
    "credentailUrl" TEXT,
    "description" TEXT,
    "verificationStatus" "public"."verificationStatus" DEFAULT 'UNASSIGNED',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Availability" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "status" "public"."SlotStatus" NOT NULL DEFAULT 'UNASSIGNED',

    CONSTRAINT "Availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Appoinment" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "status" "public"."AppoinmentStatus" NOT NULL DEFAULT 'UNASSIGNED',
    "notes" TEXT,
    "patientDescription" TEXT,
    "videoSessionId" TEXT,
    "videoSessionToken" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Appoinment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CreditTransaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "type" "public"."TranasactionType" NOT NULL DEFAULT 'UNASSIGNED',
    "packageId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreditTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserId_key" ON "public"."User"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "Availability_doctorId_startTime_idx" ON "public"."Availability"("doctorId", "startTime");

-- CreateIndex
CREATE INDEX "Appoinment_status_startTime_idx" ON "public"."Appoinment"("status", "startTime");

-- CreateIndex
CREATE INDEX "Appoinment_doctorId_startTime_idx" ON "public"."Appoinment"("doctorId", "startTime");

-- AddForeignKey
ALTER TABLE "public"."Availability" ADD CONSTRAINT "Availability_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Appoinment" ADD CONSTRAINT "Appoinment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Appoinment" ADD CONSTRAINT "Appoinment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CreditTransaction" ADD CONSTRAINT "CreditTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
