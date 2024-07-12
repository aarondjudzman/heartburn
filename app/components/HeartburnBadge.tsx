import { Badge } from "@/components/ui/badge";
import { HeartburnCategory } from "@/app/data/food";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faExclamationTriangle,
  faBan,
} from "@fortawesome/free-solid-svg-icons";

const categoryColors = {
  [HeartburnCategory.DoesNotCause]: "bg-green-500",
  [HeartburnCategory.MayCause]: "bg-yellow-500",
  [HeartburnCategory.WillCause]: "bg-red-500",
};

const categoryIcons = {
  [HeartburnCategory.DoesNotCause]: <FontAwesomeIcon icon={faCheck} />,
  [HeartburnCategory.MayCause]: (
    <FontAwesomeIcon icon={faExclamationTriangle} />
  ),
  [HeartburnCategory.WillCause]: <FontAwesomeIcon icon={faBan} />,
};

export function HeartburnBadge({ category }: { category: HeartburnCategory }) {
  return (
    <Badge className={`${categoryColors[category]} text-white text-xl p-2`}>
      {categoryIcons[category]}
    </Badge>
  );
}
