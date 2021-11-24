const getDrugId = async () => {
  const drug = "advil";
  const result = await fetch(
    `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${drug}&search=2`,
    {
      method: "GET",
    }
  );
  const json = await result.json();
  const drugId = json.idGroup.rxnormId[0];
  console.log(drugId);
};
const getDrug = async (drugId) => {
  const result = await fetch(
    `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${drugId}&sources=DrugBank`,
    {
      method: "GET",
    }
  );
  const json = await result.json();
  const drugRelation =
    json.interactionTypeGroup[0].interactionType[0].interactionPair;
  for (let i = 0; i < drugRelation.length; i++) {
    const drugId = drugRelation[i].interactionConcept[1].minConceptItem.rxcui;
    const drugDescription = drugRelation[i].description;
    const drugInformation = {
      rxcui: drugId,
      description: drugDescription,
    };
    console.log(drugInformation);
  }
  console.log(drugRelation);
};
