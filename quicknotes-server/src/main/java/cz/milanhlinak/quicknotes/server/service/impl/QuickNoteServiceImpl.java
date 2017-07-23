package cz.milanhlinak.quicknotes.server.service.impl;

import cz.milanhlinak.quicknotes.server.dao.domain.QuickNoteEntity;
import cz.milanhlinak.quicknotes.server.dao.repository.QuickNoteRepository;
import cz.milanhlinak.quicknotes.server.dto.QuickNote;
import cz.milanhlinak.quicknotes.server.exception.QuickNoteNotFoundException;
import cz.milanhlinak.quicknotes.server.service.QuickNoteService;
import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Implementation of quick note service.
 *
 * @author Milan Hlinak
 */
@Service
public class QuickNoteServiceImpl implements QuickNoteService {

    private static final Logger LOG = LoggerFactory.getLogger(
            QuickNoteServiceImpl.class);

    public final QuickNoteRepository quickNoteRepository;

    @Autowired
    public QuickNoteServiceImpl(QuickNoteRepository quickNoteRepository) {
        this.quickNoteRepository = quickNoteRepository;
    }

    @Override
    public List<QuickNote> getAllQuickNotes() {
        List<QuickNote> quickNotes = new ArrayList<>();
        quickNoteRepository.findAllByOrderByIdDesc().forEach(item -> {
            quickNotes.add(new QuickNote(item.getId(), item.getTitle(),
                    item.getText()));
        });
        LOG.info("All quick notes retrieved");
        return quickNotes;
    }

    @Override
    public QuickNote getQuickNote(Long id) {
        QuickNoteEntity quickNoteEntity = quickNoteRepository.findOne(id);
        if (quickNoteEntity == null) {
            LOG.error("Quick note with id {} not found", id);
            throw new QuickNoteNotFoundException(
                    String.format("Quick note with id %d not found", id));
        }

        QuickNote quickNote = new QuickNote(quickNoteEntity.getId(),
                quickNoteEntity.getTitle(), quickNoteEntity.getText());
        LOG.info("Quick note with id {} retrieved", id);
        return quickNote;
    }

    @Override
    public void addQuickNote(QuickNote quickNote) {
        QuickNoteEntity quickNoteEntity = new QuickNoteEntity();
        quickNoteEntity.setTitle(quickNote.getTitle());
        quickNoteEntity.setText(quickNote.getText());
        QuickNoteEntity savedEntity = quickNoteRepository.save(quickNoteEntity);
        LOG.info("Quick note with id {} added", savedEntity.getId());
    }

    @Override
    public void updateQuickNote(Long id, QuickNote quickNote) {
        QuickNoteEntity quickNoteEntity = quickNoteRepository.findOne(id);
        if (quickNoteEntity == null) {
            LOG.error("Quick note with id {} not found", id);
            throw new QuickNoteNotFoundException(
                    String.format("Quick note with id %d not found", id));
        }

        quickNoteEntity.setText(quickNote.getText());
        quickNoteEntity.setTitle(quickNote.getTitle());
        QuickNoteEntity savedEntity = quickNoteRepository.save(quickNoteEntity);
        LOG.info("Quick note with id {} updated", savedEntity.getId());
    }

    @Override
    public void deleteQuickNote(Long id) {
        QuickNoteEntity quickNoteEntity = quickNoteRepository.findOne(id);
        if (quickNoteEntity == null) {
            LOG.error("Quick note with id {} not found", id);
            throw new QuickNoteNotFoundException(
                    String.format("Quick note with id %d not found", id));
        }

        quickNoteRepository.delete(id);
        LOG.info("Quick note with id {} deleted", id);
    }

}
