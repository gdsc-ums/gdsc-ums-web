import axios from "axios";

export const getOrganizations = async () => {
  const res = await axios.get(
    "https://gist.githubusercontent.com/RubberArchind/41074556f817c48d3c8046b333575507/raw/c38cce8eb21eebdba27a3f0e071866f95724454d/gdsc-ums-members"
  );
  return res.data;
};
