// ... poprzednie importy ...
import { useEffect } from "react";

// Panel administratora – lista wydarzeń i formularz dodawania
function AdminPanel() {
  const [events, setEvents] = useState(demoEvents);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date || !newEvent.location) return;
    setEvents([
      ...events,
      { ...newEvent, id: events.length + 1, price: Number(newEvent.price) },
    ]);
    setNewEvent({ title: "", date: "", location: "", category: "", price: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Panel administratora</h1>

      <form onSubmit={handleAdd} className="space-y-2">
        <Input name="title" value={newEvent.title} onChange={handleChange} placeholder="Tytuł wydarzenia" />
        <Input name="date" value={newEvent.date} onChange={handleChange} placeholder="Data i godzina" />
        <Input name="location" value={newEvent.location} onChange={handleChange} placeholder="Lokalizacja" />
        <Input name="category" value={newEvent.category} onChange={handleChange} placeholder="Kategoria" />
        <Input name="price" value={newEvent.price} onChange={handleChange} placeholder="Cena" type="number" />
        <Button type="submit">Dodaj wydarzenie</Button>
      </form>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold mt-6">Wszystkie wydarzenia:</h2>
        {events.map((e) => (
          <div key={e.id} className="border p-3 rounded shadow-sm">
            <p><strong>{e.title}</strong> – {e.date}</p>
            <p>{e.location} | {e.category} | {e.price} zł</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// aktualizacja nawigacji i routingu w głównej funkcji:
// dodaj w nawigacji:
// <Link to="/admin">Admin</Link>

// dodaj w Routes:
// <Route path="/admin" element={<AdminPanel />} />
