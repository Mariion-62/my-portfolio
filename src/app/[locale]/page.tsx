"use client";
import { CardHomepage } from "@/src/components/CardHomepage/CardHomepage";
import { Description } from "@/src/components/Description/Description";
import { Realisations } from "./(default)/mes-realisations/ui/Realisations";

export default function Page() {
  return (
    <>
      <Description />
      <CardHomepage />
    </>
  );
}
