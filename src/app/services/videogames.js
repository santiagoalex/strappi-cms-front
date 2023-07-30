export async function getGames({ page }) {
  console.log("url", process.env);
  const res = await fetch(
    `http://localhost:1337/api/video-games?populate=[platforms][fields][0]=name&populate[cover][fileds][0]=url&pagination[page]=${page}&pagination[pageSize]=1`
  );

  if (!res.ok) {
    throw new Error("Ups algo salío mal");
  }
  const { data, meta } = await res.json();
  const { pagination } = meta;
  return { data, pagination };
}

export function getCoverImage(attributes) {
  const url = attributes?.cover?.data?.attributes?.url;
  return `http://localhost:1337${url}`;
}
