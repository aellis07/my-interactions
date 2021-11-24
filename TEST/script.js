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
