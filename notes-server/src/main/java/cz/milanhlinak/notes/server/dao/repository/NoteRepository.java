package cz.milanhlinak.notes.server.dao.repository;

import cz.milanhlinak.notes.server.dao.domain.NoteEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Note repository.
 *
 * @author Milan Hlinak
 */
public interface NoteRepository extends JpaRepository<NoteEntity, Long> {

    /**
     * Find all notes order by ID descending.
     *
     * @return the list of notes
     */
    List<NoteEntity> findAllByOrderByIdDesc();
}
