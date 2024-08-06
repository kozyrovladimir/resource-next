import React from "react";
import {Dantain, Element, Organ, Phase, Season} from "@/shared/models";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export const useValidateSearchParams = () => {
  const phaseItems = Object.values(Phase);
  const seasonItems = Object.values(Season);
  const elementItems = Object.values(Element);
  const organItems = Object.values(Organ);
  const dantainItems = Object.values(Dantain);


  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString())
    const phase = params.get('phase');
    const season = params.get('season');
    const element = params.get('element');
    const organ = params.get('organ');
    const dantian = params.get('dantian');

    // @ts-ignore
    if(phase && !phaseItems.includes(phase)) {
      params.delete('phase');
    }

    // @ts-ignore
    if(season && !seasonItems.includes(season)) {
      params.delete('season');
    }

    // @ts-ignore
    if(element && !elementItems.includes(element)) {
      params.delete('element');
    }

    // @ts-ignore
    if(organ && !organItems.includes(organ)) {
      params.delete('organ');
    }

    // @ts-ignore
    if(dantian && !dantainItems.includes(dantian)) {
      params.delete('dantian');
    }

    router.push(pathname + '?' + params.toString());
  } , [phaseItems, seasonItems, elementItems, organItems, dantainItems])
}
