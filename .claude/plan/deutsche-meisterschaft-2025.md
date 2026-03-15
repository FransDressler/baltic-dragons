## Implementation Plan: Deutsche Meisterschaft 2025 - News & Achievements Update

### Task Type
- [x] Frontend (News detail page, News list, Homepage news card, Achievements section)

### Technical Solution
Add the Deutsche Drachenbootmeisterschaft 2025 results as:
1. A new **news detail page** at `/news/deutsche-meisterschaft-halle-2025/`
2. A new **news card** on the homepage News section
3. A new entry in the **news list page** (`/app/news/page.tsx`)
4. A new **achievement entry** in the Achievements section with all 9 medal results

### Implementation Steps

#### Step 1: Copy image to public directory
- Create `/public/news/deutsche-meisterschaft-halle-2025/`
- Copy `~/Downloads/deutscheMeisterschaft.jpeg` to `/public/news/deutsche-meisterschaft-halle-2025/deutscheMeisterschaft.jpeg`
- **Deliverable**: Image available at `/news/deutsche-meisterschaft-halle-2025/deutscheMeisterschaft.jpeg`

#### Step 2: Create news detail page
- Create `/app/news/deutsche-meisterschaft-halle-2025/page.tsx`
- Follow existing pattern from `trainingslager-rostock-10-05-2025/page.tsx`
- Article data:
  - `title`: "11. Deutsche Drachenbootmeisterschaft in Halle"
  - `images`: `['/news/deutsche-meisterschaft-halle-2025/deutscheMeisterschaft.jpeg']`
  - `content`: Full German text from user input (event summary, results table, thank-you notes)
- Include lightbox functionality (same as existing detail pages)
- **Deliverable**: Working detail page at `/news/deutsche-meisterschaft-halle-2025`

#### Step 3: Update homepage News section
- File: `/app/components/News.tsx`
- Add new entry to `newsItems` array at **position 0** (newest first):
  ```
  {
    title: '11. Deutsche Drachenbootmeisterschaft 2025',
    image: '/news/deutsche-meisterschaft-halle-2025/deutscheMeisterschaft.jpeg',
    description: '2x Gold, 7x Silber bei der 11. Deutschen Drachenbootmeisterschaft in Halle! Deutscher Meister im ST Mixed 200m und 500m.',
    link: '/news/deutsche-meisterschaft-halle-2025',
  }
  ```
- **Deliverable**: New card appears first in homepage news grid

#### Step 4: Update news list page
- File: `/app/news/page.tsx`
- Add new entry to `news` array at **position 0** (newest first):
  ```
  {
    title: '11. Deutsche Drachenbootmeisterschaft 2025',
    image: '/news/deutsche-meisterschaft-halle-2025/deutscheMeisterschaft.jpeg',
    content: '2x Gold und 7x Silber! Bei der 11. Deutschen Drachenbootmeisterschaft in Halle (13.–15.06.2025) holten die Baltic Dragons den Titel als Deutscher Meister im ST Mixed 200m und 500m.',
    link: '/news/deutsche-meisterschaft-halle-2025',
  }
  ```
- **Deliverable**: New article appears first in `/news` page

#### Step 5: Add to Achievements section
- File: `/app/components/Achievements.tsx`
- Add new event to `events` array at **position 0** (newest first):
  ```
  {
    title: '11. Deutsche Drachenbootmeisterschaft',
    image: ['/news/deutsche-meisterschaft-halle-2025/deutscheMeisterschaft.jpeg'],
    locationTime: 'Halle (Saale), 13. - 15. Juni 2025',
    description: 'Herausragende Leistungen bei der 11. Deutschen Drachenbootmeisterschaft mit 2x Gold und 7x Silber.',
    achievements: [
      'Gold, ST Mixed 200m – Deutscher Meister',
      'Silber, SM Open 200m – Vizemeister',
      'Silber, SM Damen 200m – Vizemeister',
      'Gold, ST Mixed 500m – Deutscher Meister',
      'Silber, SM Open 500m – Vizemeister',
      'Silber, SM Damen 500m – Vizemeister',
      'Silber, ST Mixed 2000m – Vizemeister',
      'Silber, SM Open 2000m – Vizemeister',
      'Silber, SM Damen 2000m – Vizemeister',
    ],
  }
  ```
- **Deliverable**: New achievement block with medals displayed in Erfolge section

### Key Files

| File | Operation | Description |
|------|-----------|-------------|
| `/public/news/deutsche-meisterschaft-halle-2025/` | Create dir | Image directory |
| `~/Downloads/deutscheMeisterschaft.jpeg` | Copy | Source image |
| `/app/news/deutsche-meisterschaft-halle-2025/page.tsx` | Create | News detail page |
| `/app/components/News.tsx:7-25` | Modify | Add news card to homepage |
| `/app/news/page.tsx:7-23` | Modify | Add entry to news list |
| `/app/components/Achievements.tsx:15-35` | Modify | Add achievement event |

### Risks and Mitigation

| Risk | Mitigation |
|------|------------|
| Image file too large for web | Next.js Image component handles optimization automatically |
| News grid layout with 3 items (odd number works well with md:grid-cols-3) | 3 items fills grid perfectly |
| Achievement list rendering with 9 items may be long | Existing list-disc style handles any length |

### Notes
- The user's text mentions "SM Damen 200m" twice (positions 3 and 9). Position 9 is likely "SM Damen 2000m" based on the pattern. The plan corrects this to 2000m.
- No emojis in the website content (emojis were in the social media post, not appropriate for the website).
- Content will be in German matching the existing site language.

### SESSION_ID (for /ccg:execute use)
- CODEX_SESSION: N/A (single-model plan)
- GEMINI_SESSION: N/A (single-model plan)
