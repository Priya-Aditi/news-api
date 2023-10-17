function Menu({ active, setActive, setCategory }) {
  const links = [
    { id: 1, name: "GENERAL", value: "general" },
    { id: 2, name: "BUSINESS", value: "business" },
    { id: 3, name: "ENTERTAINMENT", value: "entertainment" },
    { id: 4, name: "HEALTH", value: "health" },
    { id: 5, name: "SCIENCE", value: "science" },
    { id: 6, name: "SPORTS", value: "sports" },
    { id: 7, name: "TECHNOLOGY", value: "technology" },
  ];

  function onClick(id, value) {
    setActive(id);
    setCategory(value);
  }

  return (
    <nav className="menu">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={active === link.id ? "active" : "inactive"}
            onClick={() => onClick(link.id, link.value)}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
