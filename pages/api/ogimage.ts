/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NextApiRequest, NextApiResponse } from "next";
import screenshot from "lib/screenshot";

export default async function ticketImages(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `https://${
    process.env.NEXT_PUBLIC_VERCEL_URL
  }/ogimage/?title=${req.query.title.toString()}&description=${req.query.description.toString()}`;
  const cacheSeconds = 7 * 24 * 60 * 60;

  const file = await screenshot(url);
  res.setHeader("Content-Type", `image/png`);
  res.setHeader(
    "Cache-Control",
    `public, immutable, no-transform, s-maxage=${cacheSeconds}, max-age=${cacheSeconds}`
  );
  res.statusCode = 200;
  res.end(file);
}
