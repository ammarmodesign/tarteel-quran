async function GetDeviceType() {
  async function getDevice() {
    let platformDetails = await navigator.userAgentData.getHighEntropyValues([
      "platform",
    ]);

    return platformDetails;
  }

  let data = await getDevice();
  return data;
}

function useDeviceType() {
  let res = GetDeviceType();
  return res;
}

export default useDeviceType;
