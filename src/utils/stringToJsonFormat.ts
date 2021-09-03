export default function stringToJsonFormat(inputString: string) {
  inputString = inputString.replace('{type:', '{"type":');
  inputString = inputString.replace('timestamp:', '"timestamp":');
  inputString = inputString.replace('os:', '"os":');
  inputString = inputString.replace('browser:', '"browser":');
  inputString = inputString.replace('min_response_time:', '"min_response_time":');
  inputString = inputString.replace('max_response_time:', '"max_response_time":');
  inputString = inputString.replace(/'/g, '"');

  const parsedString = JSON.parse(inputString);

  return parsedString;
}