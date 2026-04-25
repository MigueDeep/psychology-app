# AGENTS.md

## Project Overview

This project is a web platform for psychology students.
The goal is to provide educational content, activities, evaluations, and resources for students, parents, and teachers.

The application must be:

* Clear and easy to navigate
* Responsive (mobile-first)
* Structured for educational purposes
* Easy to update with new content

---

## Tech Stack

* React (Vite)
* Tailwind CSS
* React Router
* Form handling: Formspree or similar (no custom backend)
* Deployment: Netlify

---

## General Principles

* Keep components small and reusable
* Prefer readability over clever code
* Avoid over-engineering
* Use functional components only
* Use clear and descriptive naming

---

## Folder Structure

/src
/components
/ui
/layout
/sections
/pages
/data
/hooks
/utils
/assets

---

## Routing Structure

* / → Home
* /actividades
* /evaluacion
* /padres-maestros
* /autoevaluacion
* /acerca-de

---

## Component Guidelines

### Layout Components

* Navbar
* Footer
* Container
* SectionWrapper

### UI Components

* Button
* Card
* Input
* Textarea
* Select

### Section Components

* Hero
* Objectives
* ActivityList
* ResourceList
* EvaluationForm
* SurveyForm

---

## Styling Rules

* Use Tailwind only (no custom CSS unless necessary)
* Follow a consistent spacing system
* Use semantic HTML whenever possible
* Ensure accessibility (labels, alt text, etc.)
* Use #020042 as primary color and #307ffe as secondary color

---

## State Management

* Use useState and useEffect
* Avoid global state unless necessary
* Keep state as close as possible to where it is used

---

## Data Handling

* Static content should be stored in /data
* Use JSON or JS objects to mock data before real content arrives
* Replace mock data progressively with real content

---

## Forms

* Do NOT build a custom backend
* Use Formspree or similar services
* Validate inputs on the client side
* Provide user feedback (success/error states)

---

## Responsiveness

* Mobile-first design
* Test on multiple screen sizes
* Avoid fixed widths

---

## Accessibility

* Use proper HTML tags
* Add alt text to images
* Ensure sufficient color contrast
* Use labels in forms

---

## Performance

* Optimize images
* Lazy load heavy components if needed
* Avoid unnecessary re-renders

---

## Naming Conventions

* Components: PascalCase (ActivityCard.jsx)
* Functions: camelCase
* Variables: camelCase
* Constants: UPPER_CASE

---

## Git Workflow

* main → production
* develop → integration
* feature/* → new features

---

## Agent Behavior Rules

When generating code, agents must:

* Follow the defined folder structure
* Reuse existing components before creating new ones
* Avoid adding unnecessary dependencies
* Keep code simple and readable
* Respect the routing and architecture

---

## Future Enhancements (Optional)

* Progress tracking for students
* Interactive quizzes
* Animations for better UX

---
