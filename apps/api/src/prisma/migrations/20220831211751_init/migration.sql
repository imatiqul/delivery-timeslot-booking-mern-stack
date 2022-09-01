-- CreateTable
CREATE TABLE "DeliverySlot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "deliveryDate" DATETIME NOT NULL,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
