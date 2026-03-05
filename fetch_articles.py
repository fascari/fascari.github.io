#!/usr/bin/env python3
"""Script to fetch Medium RSS and generate articles.json."""

import urllib.request
import xml.etree.ElementTree as ET
import json
import sys

FEED_URL = "https://medium.com/feed/@felipe.ascari_49171"
OUTPUT = "articles.json"


def fetch():
    req = urllib.request.Request(FEED_URL, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        return resp.read().decode("utf-8")


def parse(xml_text):
    root = ET.fromstring(xml_text)
    ns = {"content": "http://purl.org/rss/1.0/modules/content/"}
    items = []
    for item in root.findall(".//item"):
        title_el = item.find("title")
        link_el = item.find("link")
        pub_date_el = item.find("pubDate")
        desc_el = item.find("description")
        content_el = item.find("content:encoded", ns)

        items.append({
            "title": title_el.text if title_el is not None else "",
            "link": link_el.text if link_el is not None else "",
            "pubDate": pub_date_el.text if pub_date_el is not None else "",
            "description": desc_el.text if desc_el is not None else "",
            "content": content_el.text if content_el is not None else "",
        })
    return items


if __name__ == "__main__":
    try:
        xml_text = fetch()
        items = parse(xml_text)
        with open(OUTPUT, "w", encoding="utf-8") as f:
            json.dump(items, f, ensure_ascii=False, indent=2)
        print(f"Saved {len(items)} articles to {OUTPUT}")
        for i in items[:5]:
            print(f"  - {i['title']}")
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

