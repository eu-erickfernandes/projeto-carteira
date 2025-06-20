// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🔼 PRISMA SEED");

  await prisma.account.createMany({
    data: [
      { name: "Conta Corrente" },
      { name: "Poupança" },
    ],
  });

  await prisma.transactionCategory.createMany({
    data: [
        { name: "Alimentação" },
        { name: "Assinaturas" },
        { name: "Compras" },
        { name: "Educação" },
        { name: "Ferramentas" },
        { name: "Pagamentos" },
        { name: "Pet" },
        { name: "Presentes" },
        { name: "Saúde" },
        { name: "Transporte" },
    ]
  });

  console.log("✅ PRISMA SEED SUCCESS");
}

main()
  .catch((e) => {
    console.error("❌ PRISMA SEED ERROR", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
