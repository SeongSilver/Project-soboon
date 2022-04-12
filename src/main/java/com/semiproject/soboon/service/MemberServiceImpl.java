package com.semiproject.soboon.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.semiproject.soboon.dao.MemberDAO;
import com.semiproject.soboon.vo.MemberVO;

@Service
public class MemberServiceImpl implements MemberService{

	@Inject
	MemberDAO dao;
	
	@Override
	public int memberInsert(MemberVO vo) {
		return dao.memberInsert(vo);
	}

	@Override
	public int idCheck(String userid) {
		return dao.idCheck(userid);
	}

	@Override
	public int nicknameCheck(String nickname) {
		return dao.nicknameCheck(nickname);
	}

	@Override
	public MemberVO loginCheck(MemberVO vo) {
		return dao.loginCheck(vo);
	}

	@Override
	public int emailCheck(String email) {
		return dao.emailCheck(email);
	}
	
}
