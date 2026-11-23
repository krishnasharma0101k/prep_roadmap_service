
import dotenv from "dotenv";
dotenv.config();

import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

const searchVideo = async (topic) => {
  try {
    // First search: Virtual Code channel
    let query = `Virtual Code ${topic}`;

    let response = await axios.get(BASE_URL, {
      params: {
        key: process.env.YOUTUBE_API_KEY,
        part: "snippet",
        q: query,
        maxResults: 1,
        type: "video",
      },
    });

    if (response.data.items.length > 0) {
      const video = response.data.items[0];

      if (
        video.snippet.channelTitle
          .toLowerCase()
          .includes("virtual code")
      ) {
        return {
          title: video.snippet.title,
          channel: video.snippet.channelTitle,
          url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
        };
      }
    }

    // Second search: General tutorial
    query = `${topic} Tutorial`;

    response = await axios.get(BASE_URL, {
      params: {
        key: process.env.YOUTUBE_API_KEY,
        part: "snippet",
        q: query,
        maxResults: 1,
        type: "video",
      },
    });

    if (response.data.items.length > 0) {
      const video = response.data.items[0];

      return {
        title: video.snippet.title,
        channel: video.snippet.channelTitle,
        url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      };
    }

    return null;

  } catch (error) {
    console.error(
      "Error searching YouTube video:",
      error.response?.data || error.message
    );

    return null;
  }
};

export default searchVideo;
