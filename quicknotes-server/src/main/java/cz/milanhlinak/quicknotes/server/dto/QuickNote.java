package cz.milanhlinak.quicknotes.server.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Objects;

/**
 * Immutable quick note object.
 *
 * @author Milan Hlinak
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class QuickNote {

    private final Long id;
    private final String title;
    private final String text;

    @JsonCreator
    public QuickNote(
            @JsonProperty("id") Long id,
            @JsonProperty("title") String title,
            @JsonProperty("text") String text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getText() {
        return text;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 47 * hash + Objects.hashCode(this.id);
        hash = 47 * hash + Objects.hashCode(this.title);
        hash = 47 * hash + Objects.hashCode(this.text);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final QuickNote other = (QuickNote) obj;
        if (!Objects.equals(this.title, other.title)) {
            return false;
        }
        if (!Objects.equals(this.text, other.text)) {
            return false;
        }
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "QuickNote{"
                + "id=" + id
                + ", title=" + title
                + ", text=" + text
                + '}';
    }

}
