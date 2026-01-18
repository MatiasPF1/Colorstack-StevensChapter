import ResourceGrid from "./ResourceGrid";

export default function CSW() {
  const resources = [
    {
      title: "Dictionary & Two Pointers Review",
      description: "",
      link: "https://www.canva.com/design/DAG1gqyk5HU/1CTPtHl6SueNT97zyDV2sg/view",
      image: "images/Python.jpg",
    },
    {
      title: "Two Pointers",
      description: "",
      link: "https://www.canva.com/design/DAG0B778YTk/_POFf8bqZS_GfJpD-BQoYQ/view",
      image: "images/Python.jpg",
    },
    {
      title: "Sliding Window & Binary Search",
      description: "",
      link: "https://www.canva.com/design/DAG2Vu_plUw/EF2S7y5zppwtFJutPeJAaQ/view",
      image: "images/Python.jpg",
    },
    {
      title: "Binary Search Deep Dive",
      description: "",
      link: "https://www.canva.com/design/DAG3H9DGNlQ/aBkpXyoP7oj9y5U0ay4_Xg/view",
      image: "images/Python.jpg",
    },
    {
      title: "Linked Lists",
      description: "",
      link: "https://www.canva.com/design/DAG4OSY5QRE/xlOnXuOXcYS6SN9HMxz8Kg/view",
      image: "images/Python.jpg",
    },
    {
      title: "Stacks & Loops",
      description: "",
      link: "https://www.canva.com/design/DAG49obATU0/TAvn6p8WfIOpGzkUH7MhHQ/view",
      image: "images/Python.jpg",
    },
    {
      title: "Two Pointers Continued",
      description: "",
      link: "https://www.canva.com/design/DAG1HsiBISM/xmG-DTnD6O-IB4gM_bpgnw/view",
      image: "images/Python.jpg",
    },
  ];

  return <ResourceGrid items={resources} />;
}