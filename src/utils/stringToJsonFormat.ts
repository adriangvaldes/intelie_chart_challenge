export default function stringToJsonFormat(inputString: string) {
  const datas = inputString.split(/\r?\n/);

  const dataFormatted = datas.map(data => {
    const dataAux = data.replace('{type:', '{"type":')
      .replace('timestamp:', '"timestamp":')
      .replace('os:', '"os":')
      .replace('browser:', '"browser":')
      .replace('min_response_time:', '"min_response_time":')
      .replace('max_response_time:', '"max_response_time":')
      .replace('begin:', '"begin":')
      .replace('end:', '"end":')
      .replace('select:', '"select":')
      .replace('group:', '"group":')
      .replace(/'/g, '"')
    
    const dataAuxNoSpace = dataAux.trim();

    let dataJson = JSON.parse(dataAuxNoSpace);

    return dataJson;
  });

  return dataFormatted;
}