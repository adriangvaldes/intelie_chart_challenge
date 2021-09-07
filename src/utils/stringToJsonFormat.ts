export default function stringToJsonFormat(inputString: string) {
  let datas = inputString.split(/\r?\n/);

  const dataFormatted = datas.map(data => {
    let dataAux = data.replace('{type:', '{"type":')
      .replace('timestamp:', '"timestamp":')
      .replace('os:', '"os":')
      .replace('browser:', '"browser":')
      .replace('min_response_time:', '"min_response_time":')
      .replace('max_response_time:', '"max_response_time":')
      .replace(/'/g, '"');

    let dataJson = JSON.parse(dataAux);

    return dataJson;
  });

  return dataFormatted;
}