const searchDrug = $("#drug-name");

searchDrug.on("click", function get() {
  const drug = document.getElementById("drug-search").value;
  const drug2 = document.getElementById("drug-search2").value;
  //   const drug = "advil";
  //   const drug2 = "etanercept";
  const getDrugId = async () => {
    const result = await fetch(
      `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${drug}&search=2`,
      {
        method: "GET",
      }
    );
    const result2 = await fetch(
      `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${drug2}&search=2`,
      {
        method: "GET",
      }
    );
    const json = await result.json();
    const drugId = json.idGroup.rxnormId[0];
    const json2 = await result2.json();
    const drugId2 = json2.idGroup.rxnormId[0];
    console.log(drugId);
    console.log(drugId2);
    getDrug(drugId, drugId2);
  };
  getDrugId();
  const getDrug = async (drugId, drugId2) => {
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
      const secondDrug = drugId2;
      if (secondDrug === drugId) {
        console.log(drugDescription);
      }
    }
  };
});
