package cz.milanhlinak.quicknotes.server.dao.repository;

import cz.milanhlinak.quicknotes.server.dao.domain.QuickNoteEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Quick note repository.
 *
 * @author Milan Hlinak
 */
public interface QuickNoteRepository extends JpaRepository<QuickNoteEntity, Long> {

    public List<QuickNoteEntity> findAllByOrderByIdDesc();
}
