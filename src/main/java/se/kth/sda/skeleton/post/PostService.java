package se.kth.sda.skeleton.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List<Post> getALL() {
        return postRepository.findAll();
    }

    public Optional<Post> getById(Long postId) {
        return postRepository.findById(postId);
    }

    public Post create(Post newPost) {
        return postRepository.save(newPost);
    }

    public Post update(Post updatedPost) {
        return postRepository.save(updatedPost);
    }

    public void delete(Long id) {
        postRepository.deleteById(id);
    }

}
