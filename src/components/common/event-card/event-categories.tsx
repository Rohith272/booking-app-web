import {
  Disc,
  Landmark,
  Music,
  PartyPopper,
  PersonStanding,
  Speech,
  TreePine,
  UsersRound,
} from "lucide-react";

const eventCategories = [
  { id: "conference", name: "Conference", icon: Speech },
  { id: "workshop", name: "Workshop", icon: UsersRound },
  { id: "dance", name: "Dance", icon: PersonStanding },
  { id: "music", name: "Music", icon: Music },
  { id: "festival", name: "Festival", icon: PartyPopper },
  { id: "expo", name: "Expo", icon: Landmark },
  { id: "camping", name: "Camping", icon: TreePine },
  { id: "dj", name: "DJ Party", icon: Disc },
];

const EventCategories = ({ categories }: { categories: string[] }) => {
  const filteredCategories = eventCategories.filter((category) =>
    categories.includes(category.id),
  );
  return (
    <>
      {filteredCategories.map((item) => {
        const Icon = item.icon;
        return (
          <p
            className="flex items-center gap-1 rounded bg-muted px-2 py-1"
            key={item.id}
          >
            <Icon className="h-4 w-4 text-muted-foreground" />
            <span>{item.name}</span>
          </p>
        );
      })}
    </>
  );
};

export default EventCategories;
