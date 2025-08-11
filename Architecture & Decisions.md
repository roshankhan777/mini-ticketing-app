**Q.1: Why did you structure components the way you did?**



**Answer:**  I split the app into small, reusable components (TicketForm, TicketList, TicketItem, SearchBar, TicketCounter) to ensure clarity, maintainability, and testability. Each component handles a single responsibility.

**Q.2 : Where is state stored and why?**

**Answer:** All tickets and search state live in 'App' via 'useState' so children share data easily without external state libraries.

**Q.3: What would you optimize if the app scaled to 1,000+ tickets?**



**Answer:** If scaling to 1,000+ tickets, I’d use useMemo for filtering, and possibly move data storage to a lightweight backend API. Pagination or infinite scroll would also help performance.

**Q.4: What improvements would you make to the search UX?**



**Answer:** I’d implement debounced search, highlight matches, priority filtering, and a "no results" state.

**Q.5: What did you Google or use GPT for?**

**Answer:** I Looked up React Hooks documentation and used GPT to brainstorm UX improvements. All code written manually.



