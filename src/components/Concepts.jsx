import { CORE_CONCEPTS } from "../data"
import CoreConcepts from "./CoreConcepts";

export default function Concepts() {
  return (
    <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
  )
}
