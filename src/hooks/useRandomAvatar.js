import { useEffect } from "react";

export default function useRandomAvatar() {
  const apiURL = "";

  useEffect(() => {
    console.log("generando avatar...");

    fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        console.log({ data });
        // const gifs = data.map((image) => image.images.downsized_medium.url);
        // setGifs(gifs);
      });
  }, []);
}
