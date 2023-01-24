import { Character } from "../Character/Character";
import { type CharacterDataStructure } from "../characters/types";
import { type Fighter } from "../Fighter/Fighter";
import { type AdvisorStructre } from "./AdvisorStructure";

export class Advisor extends Character implements AdvisorStructre {
  constructor(characterData: CharacterDataStructure, public advises: Fighter) {
    super(characterData);
    if (advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate(): string {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}
