package cz.milanhlinak.quicknotes.server.dao.repository;

import cz.milanhlinak.quicknotes.server.dao.domain.QuickNoteEntity;
import org.springframework.data.repository.CrudRepository;

/**
 * Quick note repository.
 *
 * @author Milan Hlinak
 */
public interface QuickNoteRepository
        extends CrudRepository<QuickNoteEntity, Long> {

}
