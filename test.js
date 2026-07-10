import { BoothMate, Category, SortOrder } from './dist/main.mjs'
import 'dotenv/config'

const client = new BoothMate({
  sessionToken: process.env.SESSION_TOKEN,
  csrfToken: process.env.CSRF_TOKEN,
  debug: true,
})

const result = await client.item.search({
  category: Category.THREE_D_MODEL,
  sort: SortOrder.LIKES,
})

// const result1 = await client.wishlist.getItems('pEPT0140')
// console.log(result1)
console.log(JSON.stringify(result, null, 2))

// console.log('\n--- With Contents ---\n');

// console.log(JSON.stringify(result2, null, 2));
// client.shop.getShop('alphaaaaaaai');

// let page = 1;
// const aggregated: {
//   id: number;
//   name: string;
//   shop: string;
//   count: number;
//   thumbnail: string;
//   done: boolean;
// }[] = [];
// while (true) {
//   const result = await client.item.search({
//     category: SubCategory.THREE_D_CHARACTER,
//     sort: SortOrder.LIKES,
//     page: page++,
//   });

//   const result2 = result.items.map((item) => {
//     return {
//       id: item.id,
//       name: item.name,
//       shop: `${item.shop.name}##${item.shop.subdomain}`,
//       count: item.wishlist_count,
//       thumbnail: item.thumbnails[0].resized,
//       done: false,
//     };
//   });

//   aggregated.push(...result2);
//   result2.forEach((item) => {
//     console.log(item);
//   });

//   if (result2.length === 0 || result2.at(-1)!.count < 500) break;
//   await new Promise((resolve) => setTimeout(resolve, 1000));
// }

// const filePath = path.resolve(__dirname, 'data.json');
// await writeFile(filePath, JSON.stringify(aggregated, null, 2), 'utf-8');
