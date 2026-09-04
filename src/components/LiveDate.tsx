"use client";

function formatToday(): string {
  return new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric" }).format(new Date());
}

export default function LiveDate() {
  return <span suppressHydrationWarning>{formatToday()}</span>;
}
